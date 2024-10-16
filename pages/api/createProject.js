import fs from "fs";
import path from "path";

const createFileApi = async (req, res) => {
	if (req.method === "POST") {
		const { fileName } = req.body;

		if (!fileName?.trim()) {
			return res.status(400).send({ message: "File name is required" });
		}

		const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9-_]/g, "");
		const dirPath = path.join(process.cwd(), "pages/projects");
		const filePath = path.join(dirPath, `${sanitizedFileName}.js`);

		if (fs.existsSync(filePath)) {
			return res.status(400).send({ message: "File already exists" });
		}

		const fileContent = `
      import React, { useState } from 'react';

      const NewComponent = () => {
        return (
          <div>
            <div>New Page: ${sanitizedFileName}</div>
          </div>
        );
      };

      export default NewComponent;
    `;

		try {
			if (!fs.existsSync(dirPath)) {
				fs.mkdirSync(dirPath, { recursive: true });
			}

			fs.writeFileSync(filePath, fileContent.trim(), "utf8");
			return res.status(200).send({ message: "File created successfully" });
		} catch (error) {
			return res
				.status(500)
				.send({ message: "Error writing file", error: error.message });
		}
	} else {
		return res.status(405).send({ message: "Method not allowed" });
	}
};

export default createFileApi;
