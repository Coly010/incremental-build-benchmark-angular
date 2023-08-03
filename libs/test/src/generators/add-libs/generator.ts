import {
  addProjectConfiguration,
  formatFiles,
  generateFiles, names,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { AddLibsGeneratorSchema } from './schema';
import {addImportToComponent} from "@nx/angular/src/utils";
import ensure_typescript_1, {ensureTypescript} from "@nx/js/src/utils/typescript/ensure-typescript";
import {insertImport} from "@nx/js";
import {componentGenerator, libraryGenerator} from "@nx/angular/generators";

export async function addLibsGenerator(
  tree: Tree,
  options: AddLibsGeneratorSchema
) {
  const tsModule = ensureTypescript();
  const libName = 'mylib';
  const libCommand = (libName) => `nx g @nx/angular:library ${libName} --buildable --routing --standalone --parent=apps/acme/src/app/app.routes.ts`
  const compName = 'test';
  const compCommand = (componentName, libName) => `nx g @nx/angular:component ${componentName} --project=${libName} --standalone`
  const addComponentToComponent = (baseComponentPath: string, baseComponentTemplatePath: string, newComponentName: string, newComponentPath: string, newComponentSelector: string) => {
    const sourceText = tree.read(baseComponentPath, 'utf-8');
    let sourceFile = tsModule.createSourceFile(baseComponentPath, sourceText, tsModule.ScriptTarget.Latest, true);
    sourceFile = insertImport(tree, sourceFile, baseComponentPath, newComponentName, newComponentPath, false)
    addImportToComponent(tree, sourceFile, baseComponentPath, newComponentName);
    tree.write(baseComponentTemplatePath, `${tree.read(baseComponentTemplatePath, 'utf-8')}
<${newComponentSelector}></${newComponentSelector}>`)
  }

  for(let i = 1; i <= 5; i++) {
    const localLibName = `${libName}${i}`;
    await libraryGenerator(tree, {
      name: localLibName,
      buildable: true,
      routing: true,
      standalone: true,
      parent: 'apps/acme/src/app/app.routes.ts',
      skipFormat: true
    })

    const localLibBaseComponentPath = `libs/${localLibName}/src/lib/${localLibName}/${localLibName}.component.ts`;
    const localLibBaseTemplatePath = `libs/${localLibName}/src/lib/${localLibName}/${localLibName}.component.html`;
    const localLibBaseComponentName = `${names(localLibName).className}Component`;

    for(let j = 1; j<=100; j++) {
      const localComponentName = `${compName}${j}`;
      await componentGenerator(tree, {
        name: localComponentName,
        standalone: true,
        project: localLibName,
        skipFormat: true
      })

      const localComponentNewFilePath = `../${localComponentName}/${localComponentName}.component`;
      const localComponentBaseName = `${names(localComponentName).className}Component`;
      const localComponentSelector = `acme-${names(localComponentName).fileName}`
      addComponentToComponent(localLibBaseComponentPath, localLibBaseTemplatePath, localComponentBaseName, localComponentNewFilePath, localComponentSelector);
    }
  }
  await formatFiles(tree);
}

export default addLibsGenerator;
