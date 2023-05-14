import * as Types from "./types";
export default [
  {
    find: 'navId:"message"',
    replacements: [
      {
        match:
          /(function \w+)\((\w+)\)({[\s]+var \w+=\w+.message[\s\S]+onSelect:\w+,children:)(\[.+\])}/g,
        replace: `$1($2)$3$4.filter((i) => replugged.plugins.getExports('dev.tharki.ClickClick').patchMessageContextMenu(i,$2.message))}`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
