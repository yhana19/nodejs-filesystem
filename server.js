const { format } = require("date-fns");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const logsFolderPath = path.join(__dirname, "logs");

const logEvents = async () => {
  const currentDateStamp = `Date-${format(new Date(), "dd-MMM-yyyy")}\t Time-${format(new Date(), "HH:mm:ss")}`;
  const dateTime = `${format(new Date(), "dd-MMM-yyyy")}_time_${format(new Date(), "HH-mm-ss")}`;

  try {
    if (!fs.existsSync(logsFolderPath)) {
      await fsPromises.mkdir(logsFolderPath);
    }
    const filePath = path.join(logsFolderPath, `${dateTime}.txt`);
    await fsPromises.writeFile(filePath, currentDateStamp);

    console.log(`File created: ${filePath}`);
  } catch (error) {
    console.error("Error creating log file:", error);
  }
};

app.post("/create-file", async (req, res) => {
  await logEvents();
  res.status(201).json({ message: "File created with timestamp" });
});

app.get("/files", (req, res) => {
  fs.readdir(logsFolderPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return res.status(500).json({ error: "Failed to read directory" });
    }

    const textFiles = files.filter(file => path.extname(file) === ".txt");
    res.status(200).json({ files: textFiles });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
