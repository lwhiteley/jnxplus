import { BuildExecutorSchema } from './schema';
import executor from './executor';
import { mockExecutorContext } from '../../utils/mocks';
import { ExecutorContext } from '@nrwl/devkit';

const options: BuildExecutorSchema = {};
const context: ExecutorContext = mockExecutorContext('test');

describe('Build Executor', () => {
  xit('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
