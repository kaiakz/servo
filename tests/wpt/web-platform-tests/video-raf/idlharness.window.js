// META: script=/resources/WebIDLParser.js
// META: script=/resources/idlharness.js

'use strict';

idl_test(
  ['video-raf'],
  ['html', 'dom'],
  idl_array => {
    idl_array.add_objects({
      HTMLVideoElement: ['video'],
    });
    self.video = document.createElement('video');
  }
);

