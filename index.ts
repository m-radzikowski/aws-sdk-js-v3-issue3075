import {S3Client} from '@aws-sdk/client-s3';
import {PutRecordsCommand} from '@aws-sdk/client-kinesis';

const s3 = new S3Client({});

const main = async () => {
    await s3.send(new PutRecordsCommand({ // this is Kinesis command, not S3, but TS does not report any problem here
        StreamName: "",
        Records: [],
    }));
}
