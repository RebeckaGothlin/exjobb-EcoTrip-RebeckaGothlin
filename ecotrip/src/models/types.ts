export interface EmissionItem {
    name: string;
    emissions: number;
}

export interface Search {
    from: string;
    to: string;
    result: string;
    data: EmissionItem[];
    time: string;
}