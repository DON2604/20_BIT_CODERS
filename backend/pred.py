import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import joblib
import json




test = pd.read_csv('./test.csv')
data_json = test[['Date', 'Close']].to_json(orient='records')

def ret():
    data_list = json.loads(data_json)
    print(type(data_list)) 
    return(data_list)



X = np.array(test.index).reshape(-1, 1)
Y = test['Close']
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.3, random_state=101)


lin_reg = LinearRegression()
lin_reg.fit(X_train, Y_train)


joblib.dump(lin_reg, 'linear_regression_model.joblib')
print("Trained model saved to linear_regression_model.joblib")
