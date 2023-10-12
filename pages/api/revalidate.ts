import {NextApiRequest, NextApiResponse} from "next"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const path = req.query.path as string

    try {
        await res.revalidate(path)
    } catch (error) {
        console.log('Error Revalidating : ', error)

        return res.status(500).send('Error revalidating')
    }

    return res.json({revalidated: true})
}
