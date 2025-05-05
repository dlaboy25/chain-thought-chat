export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  // {
  //   id: 'chat-model',
  //   name: 'Chat model',
  //   description: 'Primary model for all-purpose chat',
  // },
  // {
  //   id: 'chat-model-reasoning',
  //   name: 'Reasoning model',
  //   description: 'Uses advanced reasoning',
  // },
  {
    id: 'deepseek-base',
    name: 'DeepSeek Base 7B (f16)',
    description: 'DeepSeek 7B base model, FP16',
  },
  {
    id: 'deepseek-ft-f16',
    name: 'DeepSeek V1 7B (f16)',
    description: 'DeepSeek 7B variant V1, FP16',
  },
  {
    id: 'deepseek-v2',
    name: 'DeepSeek V2 7B (f16)',
    description: 'DeepSeek 7B variant V2, FP16',
  },
  {
    id: 'deepseek-v3',
    name: 'DeepSeek V3 7B (f16)',
    description: 'DeepSeek 7B variant V3, FP16',
  },
];
