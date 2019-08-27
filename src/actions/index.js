let keyDownId = 0;

export const keyDown = text => ({
  keyPress: 'KEY_DOWN',
  id: keyDownId++,
  filter: 'test',
  text
});