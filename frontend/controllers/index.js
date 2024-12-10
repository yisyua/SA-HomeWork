import { Router } from "express";

const router = Router();

export default router;

router.get('/status', (req, res) => {
    res.json({ success: true });
});