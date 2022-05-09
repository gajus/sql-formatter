import { ParamItems } from './core/Params';

export type IndentStyle = 'standard' | 'tabularLeft' | 'tabularRight';

export type KeywordCase = 'preserve' | 'upper' | 'lower';

export type NewlineMode = 'always' | 'never' | 'lineWidth';

export type AliasMode = 'preserve' | 'always' | 'never' | 'select';

export type CommaPosition = 'before' | 'after' | 'tabular';

export type LogicalOperatorNewline = 'before' | 'after';

export interface FormatOptions {
  indent: string;
  keywordCase: KeywordCase;
  indentStyle: IndentStyle;
  newline: NewlineMode | number;
  logicalOperatorNewline: LogicalOperatorNewline;
  aliasAs: AliasMode;
  tabulateAlias: boolean;
  commaPosition: CommaPosition;
  newlineBeforeOpenParen: boolean;
  newlineBeforeCloseParen: boolean;
  lineWidth: number;
  linesBetweenQueries: number;
  denseOperators: boolean;
  newlineBeforeSemicolon: boolean;
  params?: ParamItems | string[];
}
