type Corners = {
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomRightRadius: number;
  borderBottomLeftRadius: number;
};

const R = 18;
const TAIL = 6;

export const bubbleRadius = (mine: boolean, groupEnd: boolean): Corners => ({
  borderTopLeftRadius: R,
  borderTopRightRadius: R,
  borderBottomRightRadius: mine && groupEnd ? TAIL : R,
  borderBottomLeftRadius: !mine && groupEnd ? TAIL : R,
});
