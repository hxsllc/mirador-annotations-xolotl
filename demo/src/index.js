
import mirador from 'mirador/dist/es/src/index';
import annotationPlugins from '../../src';
import AnnotationStoreAdapter from '../../src/AnnotationStoreAdapter';

const SERVER_URL = 'http://127.0.0.1:8000';

const config = {
  annotation: {
    adapter: (canvasId) => new AnnotationStoreAdapter(canvasId, SERVER_URL),
    orageAnnotations: false, // display annotation JSON export button
  },
  id: 'demo',
  window: {
    defaultSideBarPanel: 'annotations',
    sideBarOpenByDefault: true,
  },
  windows: [{
    loadedManifest: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
  }],
};

mirador.viewer(config, [...annotationPlugins]);
