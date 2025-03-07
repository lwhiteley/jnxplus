import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { NxBootGradleLibGeneratorSchema } from './schema';

describe('library generator', () => {
  let appTree: Tree;
  const options: NxBootGradleLibGeneratorSchema = {
    name: 'test',
    language: 'java',
    groupId: 'com.example',
    projectVersion: '0.0.1-SNAPSHOT',
  };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
    appTree.write(
      './settings.gradle',
      "rootProject.name = 'boot-multi-project'"
    );
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test');
    expect(config).toBeDefined();
  });
});
