import { computed, reactive } from 'vue';

export function generateDefaultsComputed(props: any) {
  return reactive({
    classes: generateClassesFromProps(props),
    style: generateStylesFromProps(props),
  });
}

export function generateClassesFromProps(props: any) {
  let result = '';
  if (props.rounded != null) {
    switch (typeof props.rounded) {
      case 'boolean':
        if (props.rounded === true) result += 'rounded ';
        break;
      case 'string':
        result += 'rounded-' + props.rounded + ' ';
        break;
    }
  }

  if (props.shadow != null) {
    switch (typeof props.shadow) {
      case 'boolean':
        if (props.shadow === true) result += 'shadow ';
        break;
      case 'string':
        result += 'shadow-' + props.shadow + ' ';
    }
  } else {
    result += 'shadow ';
  }

  if (props.border != null) {
    switch (typeof props.border) {
      case 'boolean':
        if (props.border === true) result += 'border ';
        break;
      case 'string':
        result += 'border-' + props.border + ' ';
    }
  } else {
    result += 'border ';
  }

  return result;
}

export function generateStylesFromProps(props: any) {
  let result = '';

  if (props.shadow != null && typeof props.shadow === 'string') {
    result += 'box-shadow: ' + props.shadow + ' ' + props.shadow + ' 0px ' + props.color + ';';
  }

  if (props.width != null) {
    result += 'width: ' + props.width + ';';
  }

  if (props.height != null) {
    result += 'height: ' + props.height + ';';
  }

  if (props.padding != null) {
    result += 'padding: ' + props.padding + ' !important;';
  }

  if (props.backgroundColor != null) {
    const background = ['primary', 'secondary', 'success', 'error', 'warning', 'info'].includes(props.backgroundColor)
      ? resolveThemeColor(props.backgroundColor)
      : props.backgroundColor;
    result += 'background-color: ' + background + ' !important;';
  }

  if (props.color != null) {
    const color = ['primary', 'secondary', 'success', 'error', 'warning', 'info'].includes(props.color)
      ? resolveThemeColor(props.color)
      : props.color;
    result += 'color: ' + color + ' !important;';
  }

  return result;
}

function resolveThemeColor(color: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(`--neo-${color}`);
}
