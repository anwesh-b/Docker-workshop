FROM python:latest

RUN mkdir /flaskapp

COPY ./* /flaskapp/

WORKDIR /flaskapp

RUN pip3 install -r requirements.txt

EXPOSE 5000

CMD ["python3","app.py"]