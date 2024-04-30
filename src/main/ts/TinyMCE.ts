import { TinyMCE as TinyMCEGlobal } from 'opentiny';

const getTinymce = (view: Window): TinyMCEGlobal | null => {
  const global = view as any;

  return global && global.tinymce ? global.tinymce : null;
};

export { getTinymce };
