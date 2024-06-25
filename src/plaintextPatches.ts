import Types from "./types";
export default [
  {
    find: "renderLeaf:this.renderLeaf",
    replacements: [
      {
        match: /renderLeaf:this\.renderLeaf/,
        replace: (prefix) => `${prefix},channelId:this.props.channelId`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
