import * as t from "./actionTypes";

// Service > Directories
const initialState = {
  directories: {
    '0x1': {
      dirName: 'DappData',
      metaHash: '0x...',
      items: {
        '0': {
          itemName: 'File 1.jpg',
          fileSize: 12233,
          mimeType: 'JPEG'
        }
      }
    },
    '0x2': {
      dirName: 'Images',
      metaHash: '0x...',
      items: {
        '0': {
          itemName: 'File 2.jpg',
          fileSize: 12233,
          mimeType: 'JPEG'
        }
      }
    }
  },
  directoryList: [
    {
      dirId: '0x1',
      dirName: 'DappData',
      metaHash: '0x...'
    },
    {
      dirId: '0x2',
      dirName: 'Images',
      metaHash: '0x...'
    }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
