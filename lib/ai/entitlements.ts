import type { UserType } from '@/app/(auth)/auth';
import type { ChatModel } from './models';

interface Entitlements {
  maxMessagesPerDay: number;
  availableChatModelIds: Array<ChatModel['id']>;
}

export const entitlementsByUserType: Record<UserType, Entitlements> = {
  /*
   * For users without an account
   */
  guest: {
    maxMessagesPerDay: 20,
    availableChatModelIds: ['chat-model', 'chat-model-reasoning', 'deepseek-ft-f16', 'deepseek-base', 'deepseek-v2', 'deepseek-v3'],
  },

  /*
   * For users with an account
   */
  regular: {
    maxMessagesPerDay: 100,
    availableChatModelIds: ['chat-model', 'chat-model-reasoning', 'deepseek-ft-f16', 'deepseek-base', 'deepseek-v2', 'deepseek-v3'],
  },

  /*
   * TODO: For users with an account and a paid membership
   */
};
