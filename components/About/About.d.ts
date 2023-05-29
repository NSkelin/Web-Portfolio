import type {ImageProps} from "next/image";
export type Interest = string | Array<Interest>;
export type Skill = {Icon: any; text: string};
export type AboutProps = {description: string[]; interests: Interest[]; skillIconSources: Skill[][]; image: ImageProps};