# Database Setup Instructions

## Step 1: Set Up Environment Variables

Navigate to the `packages/database` directory

```bash
cd packages/database
```

Copy the example environment file to create a new `.env` file:

```bash
cp .env.example .env

docker run --name teamshift -p 5455:5432 -e POSTGRES_USER=teamshift -e POSTGRES_PASSWORD=teamshift -e POSTGRES_DB=teamshiftDB -d postgres
```
