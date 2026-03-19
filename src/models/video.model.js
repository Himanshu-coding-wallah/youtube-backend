import mongoose from "mongoose"
import paginate from "mongoose-paginate-v2"
const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String, //url
            required: true,
        },
        thumbnail: {
            type: String, //url
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number, //url
            required: true,
        },
        view: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },{timestamps: true},
)

videoSchema.plugin(paginate)
export const Video  = mongoose.model("Video", videoSchema)