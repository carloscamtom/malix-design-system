/**
 * @camtomlabs/malix-design-system/eslint-plugin
 *
 * Custom ESLint rules that enforce usage of canonical Malix components
 * instead of raw HTML elements.
 *
 * Usage in consuming repo:
 *
 *   // .eslintrc.cjs
 *   module.exports = {
 *     plugins: ['@camtomlabs/malix'],
 *     rules: {
 *       '@camtomlabs/malix/no-raw-button': 'warn',
 *       '@camtomlabs/malix/no-raw-input': 'warn',
 *     },
 *   };
 *
 * Both rules allow an escape hatch via the disable comment:
 *   // eslint-disable-next-line @camtomlabs/malix/no-raw-button
 *   <button type="submit" form="external-form-id" />
 */

'use strict';

/** @type {import('eslint').Rule.RuleModule} */
const noRawButton = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Disallow raw <button> elements. Use <Button> from @camtomlabs/malix-design-system instead.',
    },
    schema: [
      {
        type: 'object',
        properties: {
          allow: {
            type: 'array',
            items: { type: 'string' },
            description: 'JSX element names that are allowed (e.g. ["Button", "MenuButton"])',
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      rawButton:
        'Do not use raw <button>. Import Button from "@camtomlabs/malix-design-system" and use <Button hierarchy="primary">.',
    },
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        if (node.name.type !== 'JSXIdentifier') return;
        if (node.name.name !== 'button') return;
        context.report({ node, messageId: 'rawButton' });
      },
    };
  },
};

/** @type {import('eslint').Rule.RuleModule} */
const noRawInput = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Disallow raw <input> elements (except type="hidden"). Use <Input> from @camtomlabs/malix-design-system instead.',
    },
    schema: [
      {
        type: 'object',
        properties: {
          allowTypes: {
            type: 'array',
            items: { type: 'string' },
            default: ['hidden', 'file'],
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      rawInput:
        'Do not use raw <input>. Import Input from "@camtomlabs/malix-design-system" and use <Input>.',
    },
  },
  create(context) {
    const options = context.options[0] || {};
    const allowTypes = options.allowTypes || ['hidden', 'file'];

    return {
      JSXOpeningElement(node) {
        if (node.name.type !== 'JSXIdentifier') return;
        if (node.name.name !== 'input') return;

        // Allow inputs whose type attribute is in allowTypes (e.g. hidden, file)
        const typeAttr = node.attributes.find(
          (attr) =>
            attr.type === 'JSXAttribute' &&
            attr.name &&
            attr.name.name === 'type' &&
            attr.value &&
            attr.value.type === 'Literal',
        );
        if (typeAttr && allowTypes.includes(typeAttr.value.value)) return;

        context.report({ node, messageId: 'rawInput' });
      },
    };
  },
};

module.exports = {
  rules: {
    'no-raw-button': noRawButton,
    'no-raw-input': noRawInput,
  },
  configs: {
    recommended: {
      plugins: ['@camtomlabs/malix'],
      rules: {
        '@camtomlabs/malix/no-raw-button': 'warn',
        '@camtomlabs/malix/no-raw-input': 'warn',
      },
    },
  },
};
