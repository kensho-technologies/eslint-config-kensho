import something, {foo, baz} from './js-exports' // baz is not exported
import somethingElse from './nonexistent' // file does not exist

export {foo, baz, something, somethingElse}
export {bar} from './js-exports'
