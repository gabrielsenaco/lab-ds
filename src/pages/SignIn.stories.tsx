import { Meta, StoryObj } from  '@storybook/react';
import { SignIn } from './SignIn';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (_, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado!',
          }))
        }),
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.type(canvas.getByPlaceholderText('digite seu email'), 'gabriel@test.com');
    userEvent.type(canvas.getByPlaceholderText('******'), 'senmbhdsg45');
    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      expect(canvas.getByText('Login realizado!')).toBeInTheDocument;
    })
  }
}