import { v4 as uuidv4 } from "uuid";

export const generateSubmitId = () => uuidv4().split("-")[0].toUpperCase();
