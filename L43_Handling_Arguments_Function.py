#Handling Arguments in Functions

#input_params
# Here the original value will not change 
chai = "Ginger chai" 

# def prepare_chai(order):
#     print(f"Preparing: {chai}")

# prepare_chai(chai)
# print(id(chai))
# chai = "Lemon chai" # here the reference will change
# print(id(chai))
# chai = "Ginger chai" # here the reference will be back to the previous "Ginger chai"
# print(id(chai))
# chai = "Ginger chaI" # case is changed (i to I) here so the reference will be changed
# print(id(chai))
# print(chai)

# When It comes to list
chai = [1,2,3]

def edit_chai(cup):
    cup[1] = 42

print(id(chai[1]))
edit_chai(chai)
print(chai)
print(id(chai[1]))
chai[1] = 2
print(id(chai[1]))



# use of args and *kwargs
def special_chai(*args, **kwargs):
    print("Arguments without keyword(args):", args)
    print("Arguments with keywords(kwargs:)",kwargs)
    print("Fisrt argument:",args[1])
    print("first kwargs:", kwargs["sweetner"])

special_chai("Cinnamon", "Cardmom", sweetner="Jaggery", foam="Yes",)



#default value in parameter
def chai_order(order = "Masala"):
    print("Your order is:",order)

chai_order() # prints default value ("Masala")
chai_order("Elaichi") # prints "Elaichi"

'''this is an multi line
comment
nobody cares'''

# default traps
def chai_order2(order = []):
    chai_order.append("Masala")
    print("Your order is:", chai_order)

# When you call the same method multiple times the "masala" is appended to the array each time
chai_order()
chai_order() 
# possible solution can be you can have a conditional check when the array has no data then only you append the data