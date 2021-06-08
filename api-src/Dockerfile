FROM python:3.9-slim-buster
ENV PYTHONBUFFERED=1
WORKDIR /api
COPY requirements.txt /api/
RUN apt update
RUN pip install -r requirements.txt
COPY . /api/