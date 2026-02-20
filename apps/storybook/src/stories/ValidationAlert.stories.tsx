import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ValidationAlert } from '@malix/ui';

const meta = {
  title: 'Malix/ValidationAlert',
  component: ValidationAlert,
  args: {
    title: 'Error de validacion',
    message: 'El campo "nombre" es obligatorio y no puede estar vacio.',
    variant: 'error',
  },
} satisfies Meta<typeof ValidationAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    title: 'Error de validacion',
    message: 'El campo "nombre" es obligatorio y no puede estar vacio.',
    variant: 'error',
  },
};

export const Warning: Story = {
  args: {
    title: 'Advertencia',
    message: 'Tu sesion expirara en 5 minutos. Guarda tus cambios.',
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    title: 'Informacion',
    message: 'Los cambios se han guardado automaticamente.',
    variant: 'info',
  },
};

export const WithClose: Story = {
  args: {
    title: 'Alerta descartable',
    message: 'Haz clic en el boton de cerrar para descartar esta alerta.',
    variant: 'warning',
    onClose: () => {},
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 480 }}>
      <ValidationAlert variant="error" title="Error de validacion" message="El campo 'nombre' es obligatorio y no puede estar vacio." />
      <ValidationAlert variant="warning" title="Advertencia" message="Tu sesion expirara en 5 minutos. Guarda tus cambios." onClose={() => {}} />
      <ValidationAlert variant="info" title="Informacion" message="Los cambios se han guardado automaticamente." />
    </div>
  ),
};
