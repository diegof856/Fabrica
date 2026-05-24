import type { IconType } from "react-icons";
export interface TeamMember {
  photo: string | IconType;
  name: string;
  title: string;
  qualification_1: string;
  qualification_2: string;
  qualification_3: string;
  qualification_4: string;
  levels: string[];
}