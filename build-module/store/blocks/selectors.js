import { getEditorMode } from '../editor/selectors';
/**
 * Get blocks from edit history
 * @param {object} state - Current state
 * @returns {object[]}
 */

export function getBlocks(state) {
  return state.blocks.present.blocks;
}
/**
 * Get end position
 * @param {object} state - Current state
 * @returns {object}
 */

export function getEditorSelectionStart(state) {
  return state.blocks.present.selectionStart;
}
/**
 * Get end position
 * @param {object} state - Current state
 * @returns {object}
 */

export function getEditorSelectionEnd(state) {
  return state.blocks.present.selectionEnd;
}
/**
 * Is undo possible?
 * @param {object} state - Current state
 * @returns {boolean}
 */

export function hasEditorUndo(state) {
  return state.blocks.past.length > 0 && getEditorMode(state) === 'visual';
}
/**
 * Is redo possible?
 * @param {object} state - Current state
 * @returns {boolean}
 */

export function hasEditorRedo(state) {
  return state.blocks.future.length > 0 && getEditorMode(state) === 'visual';
}
//# sourceMappingURL=selectors.js.map