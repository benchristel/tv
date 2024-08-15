export function errorThrownFrom(fn/* FIXME : () => mixed */)/* : Error | void */ {
  try {
    fn()
  } catch (e) {
    return e
  }
}
