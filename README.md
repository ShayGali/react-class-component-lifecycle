# Mounting

תהליך ההרכבה של הקומפוננטה. יש בהתילך בסך הכל 4 פונקציות:

1. constructor()
1. getDerivedStateFromProps()
1. render()
1. componentDidMount()

## constructor

פונקציית הבנאי היא הראשונה שרצה. היא המקום היחיד שבו ניתן לאתחל state חדש

## getDerivedStateFromProps

קיים למטרה אחת בלבד - לעדכן את ה state הפנימי של קומפוננטה לפי הprops שמגיע מבחוץ

## render

הjsx שהקומפוננטה מחזירה

## componentDidMount

מופעל מיד לאחר ההרכבה של הקופוננטה.
ירוץ פעם אחת בלבד - טוב לייצירת בקשות http.
