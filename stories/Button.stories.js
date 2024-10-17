import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

export class DSButton extends LitElement {
  static styles = css`
    .component {
      display: inline-flex;
      align-items: center;
      gap: 0.625rem;
      justify-content: center;

      block-size: 2.125rem;
      line-height: 1.5rem;
      min-inline-size: 5.1875rem;

      padding-block: var(--glide-core-spacing-xs);
      padding-inline: var(--glide-core-spacing-sm);

      transition-duration: 150ms;
      tr4ansition-property: color, background-color, border-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      user-select: none;

      border-radius: 0.75rem;
      border-style: solid;
      border-width: 1px;

      cursor: pointer;

      font-family: var(--glide-core-heading-xxs-font-family);
      font-size: var(--glide-core-heading-xxs-font-size);
      font-style: var(--glide-core-heading-xxs-font-style);
      font-weight: var(--glide-core-heading-xxs-font-weight);

      &:focus {
        outline: none;
      }
    }

    .small {
      block-size: 1.75rem;
      font-size: var(--glide-core-body-xs-font-size);
      line-height: 1rem;
      min-inline-size: 4.375rem;
    }

    .primary {
      background-color: var(--glide-core-surface-primary);
      border-color: transparent;
      color: var(--glide-core-text-selected);

      &:hover {
        background-color: var(--glide-core-surface-hover);
        border-color: transparent;
        box-shadow: var(--glide-core-glow-sm);
        color: var(--glide-core-text-primary);
      }
    }

    .secondary {
      background-color: transparent;
      border-color: var(--glide-core-border-primary);
      color: var(--glide-core-text-primary);

      &:hover {
        background-color: var(--glide-core-surface-hover);
        border-color: transparent;
        box-shadow: var(--glide-core-glow-sm);
        color: var(--glide-core-text-primary);
      }
    }
  `;

  static properties = {
    size: { type: String },
    variant: { type: String },
  };

  constructor() {
    super();

    this.size = 'large';
    this.variant = 'primary';
  }

  render() {
    return html`<button
      class=${classMap({
        component: true,
        primary: this.variant === 'primary',
        secondary: this.variant === 'secondary',
        large: this.size === 'large',
        small: this.size === 'small',
      })}
    >
      <slot></slot>
    </button>`;
  }
}
customElements.define('ds-button', DSButton);

export default {
  title: 'Button',
  tags: ['autodocs'],
  args: {
    'slot="default"': 'Label',
    variant: 'primary',
    size: 'large',
  },
  render: (args) =>
    html`<ds-button size=${args.size} variant=${args.variant}
      >${args['slot="default"']}</ds-button
    >`,
  argTypes: {
    'slot="default"': {
      control: { type: 'text' },
      table: {
        type: { summary: 'Element | string' },
      },
      type: { name: 'string', required: true },
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      table: {
        defaultValue: {
          summary: '"primary"',
        },
        type: { summary: '"primary" | "secondary"' },
      },
    },
    size: {
      control: { type: 'radio' },
      options: ['large', 'small'],
      table: {
        defaultValue: {
          summary: '"large"',
        },
        type: { summary: '"large" | "small"' },
      },
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
  },
};

export const PrimarySmall = {
  args: {
    size: 'small',
    variant: 'primary',
  },
};

export const SecondarySmall = {
  args: {
    size: 'small',
    variant: 'secondary',
  },
};
