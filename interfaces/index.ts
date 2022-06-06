// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type Cottage = {
  id: number
  name: string
  description: string
  images: Array<string>
  price: number
}
