import { format } from 'date-fns';

const formatDate = (date: string) => format(new Date(date), 'MMMM dd, yyyy');

export default formatDate;
