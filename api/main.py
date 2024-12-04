from fastapi import FastAPI,WebSocket
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from database import insert_data,get_all_data
import json

origins = ['http://localhost:3000']

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

class Signup(BaseModel):
    email:str
    password:str



@app.post("/api/signup")
async def create_signup(input_data:Signup):
    print(input_data)
    email = input_data.email
    password = input_data.password
    with open("output.json","w") as f:
        json.dump([{"email":email,"password":password}],f)
    all_data = get_all_data()
    print(email)
    print(all_data)
    if email not in all_data:
        insert_data(email,password)
        return {"result":"no"}
    else:
        return {"result":"yes"}

# @app.websocket("/ws")
# async def websocket_endpoint(websocket: WebSocket):
#     await websocket.accept()
#     try:
#         while True:
#             data = await websocket.receive_text()
#             message = Signup(content=data, sender="User")
#             messages.append(message)
#             # Generate and send response
#             response = Message(content=f"Server received: {data}", sender="Server")
#             messages.append(response)
#             await websocket.send_text(response.model_dump_json())
#     except WebSocketDisconnect:
#         print("WebSocket disconnected")

# @app.get("/")
# async def root():
#     return {"message": "Hello World"}

# fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]


# @app.get("/items/")
# async def read_item(skip: int = 0, limit: int = 10):
#     return fake_items_db[skip : skip + limit]

# @app.get("/items/{item_id}")
# async def read_item(item_id):
#     return {"item_id": item_id}