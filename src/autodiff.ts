export {
  add,
  subtract,
  multiply,
  divide,
  negative,

  sqrt,
  pow,

  exp,
  log,

  sin,
  cos,
  tan,

  asin,
  acos,
  atan,

  toValueAndDerivatives,
  SeriesOrNumber,
  setNumberOfDerivativesToCompute,
  variableEvaluatedAtPoint,
} from './series'

export interface ISeries {
  coefficients: number[]
}