import { Canvas } from './canvas';
import { config } from './config';
import { Smoke } from './smoke';

document.addEventListener ('DOMContentLoaded', () => {
  const container = config.getContainer ();
  const canvas = new Canvas (container, window);
  const smoke = new Smoke (canvas);
  smoke.animate ();
});
