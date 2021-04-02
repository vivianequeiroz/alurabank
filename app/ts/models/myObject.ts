import { Printable } from './printable';
import { Comparable } from './comparable';

export interface MyObject<T> extends Printable, Comparable<T> { }