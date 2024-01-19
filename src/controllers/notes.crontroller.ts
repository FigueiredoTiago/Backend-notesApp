import { Request, Response } from 'express';

export const getNotes = (req: Request, res: Response) => {
    const notes = 'notes';

    res.send({ notes });
};
