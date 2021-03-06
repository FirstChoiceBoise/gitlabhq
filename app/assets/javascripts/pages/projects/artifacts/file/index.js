import BlobViewer from '~/blob/viewer/index';
import ShortcutsNavigation from '~/behaviors/shortcuts/shortcuts_navigation';

document.addEventListener('DOMContentLoaded', () => {
  new ShortcutsNavigation(); // eslint-disable-line no-new
  new BlobViewer(); // eslint-disable-line no-new
});
