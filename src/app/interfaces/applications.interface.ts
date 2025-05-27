export interface Application{
    id: number;
    role: string;
    company: string;
    contact: string;
    type: string;
    mode: string;
    link: string;
    applicationDate: string;
    lastReplyDate?: string;
    status: 'Applied' | 'Interviewing' | 'Offer' | 'Ghosted' | 'Rejected' | 'Accepted';
}