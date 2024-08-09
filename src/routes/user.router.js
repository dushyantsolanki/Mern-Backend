import { Router } from "express";
import { fetchAllStudentByQuery } from "../controllers/listStudent.controller.js";
import { idWiseStudent } from "../controllers/idWiseStudent.controller.js";
import { postData } from "../controllers/postData.controller.js";
import { updateData } from "../controllers/updateData.controller.js";
import { deleteData } from "../controllers/deleteData.controller.js";
import { searchStudent } from "../controllers/search.controller.js";


const router = Router();

// Define a route.
router.route("/student").get(fetchAllStudentByQuery);
router.route("/student/search").get(searchStudent);
router.route("/student/:id").get(idWiseStudent);
router.route("/student").post(postData);
router.route("/student/:id").put(updateData);
router.route("/student/:id").delete(deleteData);


// create a studentRouter for export.
const studentRouter = router;

export { studentRouter };
