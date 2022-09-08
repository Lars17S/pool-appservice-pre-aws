import express from "express";
import ServiceModel from "../models/ServiceModel.js";

const serviceRouter = express.Router();

//Create
serviceRouter.post("/", async (req, res) => {
  const newService = new ServiceModel(req.body.service);
  try {
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update
serviceRouter.put("/:id", async (req, res) => {
  try {
    const updatedService = await ServiceModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body.service,
      },
      { new: true }
    );
    res.status(200).json(updatedService);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
serviceRouter.delete("/:id", async (req, res) => {
  try {
    await ServiceModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Service deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Service
serviceRouter.get("/find/:id", async (req, res) => {
  try {
    const service = await ServiceModel.findById(req.params.id);
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get All Services
serviceRouter.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qSort = req.query.sort;
  const qColor = req.query.color;
  const qType = req.query.type;
  const query = {};
  let sort = {};
  if (qColor) {
    query["color"] = qColor;
  }
  if (qType) {
    query["type"] = qType;
  }
  if (qNew) {
    query["new"] = true;
  }
  try {
    let services;
    switch (qSort) {
      case "asc":
        sort = { price: 1 };
        break;
      case "desc":
        sort = { price: -1 };
        break;
      default:
        sort = { createdAt: -1 };
        break;
    }
    if (query["new"]) {
      services = await ServiceModel.find({ new: true })
        .sort({ createdAt: -1 })
        .limit(5);
    } else {
      services = await ServiceModel.find(query).sort(sort);
    }
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default serviceRouter;
