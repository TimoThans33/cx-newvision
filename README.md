# cx-prevision
azure website for the laser projector from prevision

## getting started
python3 run.py

## deploy to azure
First install the azure cli. Then push a directory to the server with:
```
az webapp up --sku your_plan --name your_name
```
I have used B1 as plan and prevision as name.
Small updates can be pushed by simply
```
az webapp up
```
