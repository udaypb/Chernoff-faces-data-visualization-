# Homework #7: Argumentative Vis OR Chernoff Faces

This assignment is due on the last day of class (December 6th @ 11:55 pm, via pushing code to GitHub). For this homework, you will complete one of two options:
* Create an argumentative vis
* Create a interactive set of Chernoff Faces

No matter the option you pick, you should have the following files in your submission:
* index.html: Put your webpage here
* data/ folder: Put your dataset in here
* Make sure to include any locally linked D3, CSS, and other libraries

## Argumentative Vis Instructions
If you choose the argumentative vis option, your instructions are the following:

Using techniques from the storytelling lecture (Lecture #13) and Visualization Rhetoric paper (Week 7 reading), you will create two visualizations about a dataset that frame the data with opposite narratives.

First, find a dataset about a "controversial" topic. In other words, a topic with strong opinions on both sides of the issue. This can be any topic that you want: a political issue, science, religion, sociocultural, economics, immigration, sports, climate change, geopolitical sovereignty, etc. Topics from other regions or countries are also allowed. Good places to look for this data include Kaggle and news organizations that provide access to their data (538, New York Times, etc.).

Next, create a webpage **index.html** with two visualizations (one on the left, one on the right). The two visualizations should use the same dataset. (Note: not all attributes must be exactly the same, but use the same source.) One visualization should be rhetorically framed to argue "in support" of a viewpoint, and the other visualization should be rhetorically framed to argue against the viewpoint.

The trick here is that you will use the _same dataset_ for both visualizations. Again, you don't have to use the exact same datapoints or attributes in each chart, instead you'll use rhetorical techniques to frame the data in opposing ways. Some examples of how you might do this include: filtering some of the data, picking different ranges, using different axis scales, clustering or binning the data, using text annotating on the charts, picking colors or channels to emphasize some aspect of the data. You're allowed to pre-process the data or break up the data into multiple files if necessary.

Review the lecture slides and the Visualization Rhetoric paper for ideas of specific rhetorical techniques. Your frame of mind if you choose this option should be like a debate: one team argues the **affirmative** position, while the other argues the **negative**. For this assigment, you'll argue both sides. You are free to use any visualization techniques and rhetorical framing devices you like, but you should only create ONE main visualization for each side. (In other words, don’t make a dashboard of several linked charts. However, it’s okay to inset or annotate a smaller chart within your primary chart though.) 

Above the charts, add a title describing the debate topic, and provide a link to the dataset source. At the bottom of each chart, providing a brief caption about each chart. Then, below that, provide the following paragraphs.
* Introduce the topic: Provide a brief (3-4 sentence) description of the chosen topic. In other words, if I'm not familiar with the topic, introduce it here. If you'd like, you may state your personal position on the topic, though that's not required.
* Left chart: Describe the position of the left chart, and describe the rhetorical techniques you are using in this chart. You should explicitly reference techniques from the lecture/paper.
* Right chart: Provide a similar writeup for the right chart.

## Chernoff Faces

We've discussed [Chernoff Faces](https://www.jstor.org/stable/2284077?seq=1#metadata_info_tab_contents) in class.

The original Chernoff faces techique use a simplified cartoon drawing of a face to represent multivariate data points. Each face represents a single data point. Individual facial features (eyes, ears, mouth, nose, etc.) represent different attributes. Their shape, size, placement, orientation, etc. represent their values. By displaying several faces, a viewer can review the facial features to compare attributes. 

There are many variants on Chernoff faces, both using different types of faces (for example, ones that include hair and mustaches) and other types of things (e.g., [Chernoff fish](https://www.information-age.com/data-personality-evolution-visualisation-123464800/), [Adventurer Icons](https://www.datavisualizationsociety.com/member-data-challenge/2019/3/28/chernoff-adventurers), [Halloween badges](https://twitter.com/yuliakrolik/status/1189915828197756928), etc.). For this assignment, you will create a new variant of Chernoff faces using the famous [Wine dataset](https://archive.ics.uci.edu/ml/datasets/Wine).

First, design your Chernoff variant. It must be able to show at least 4 attributes (though more are allowed!), and be a recognizable object (i.e., you can't create an [abstract expressionism](https://en.wikipedia.org/wiki/Abstract_expressionism) variant). For example, if you wanted to create a "Chernoff Cactus," the following might work for 5 numerical attributes: cactus height, cactus width, cactus color opacity, height of left arm spoke, height of right arm spoke. While animals are a popular Chernoff variant, inanimate objects also also okay, such as lamps, fishing poles, rickshaws, tennis shoes, snowflakes, and dishware. Use your imagination and feel free to get creative!

You'll display your Chernoff variants in the following following interface on **index.html**. Put a appropriate title at the top. Below that, list the encodings used in your Chernoff variant (e.g., "Feature 1 is cactus height, where a taller cactus indicates a higher numerical value.") Below this, add a control panel with the following: For each feature on your Chernoff variant, have a labeled dropdown that lists all 13 numerical attributes in the Wine dataset. Using these dropdowns, a user should be able to map any attribute in the Wine dataset to any feature in your Chernoff variant. Below this, draw your designed Chernoff variant for each of the 178 instances (data points) in the Wine dataset, based on the current selections in the dropdowns. If the user updates a dropdown, then the Chernoff variants should also update. 

Around each Chernoff variant, I recommend putting a box (or border), so it's easier to see what's going on. I also recommend not making the variants too big, perhaps 2 inches or less on your monitor. Your webpage will always display all 178 Chernoff variants. I recommend drawing each variant in its own div/svg, so that if the page is resized, the variants don't overflow out of the window. The other option is to create a very tall SVG canvas, but if you do this option, don't make it wider than your browser window. The user should not have to scroll horizontally, they shouod only need to scroll vertically to see all the faces.

The user should also be able to sort the Chernoff faces based on a selected attribute in the Wine dataset. Add two more dropdowns in your control panel: one for selecting an attribute to sort the Chernoff variants, and a second dropdown that lets them sort by either _ascending_ or _descending_ order.

## Grading and Bonus Points

Regardless of what option you choose, please organize and lay out your page nicely, with nicely styled elements.

This assignment is worth 10 points. Bonus points will be considered for submissions that go above and beyond (e.g., creating particularly compelling or impressive argumentative visualizations, creating more interesting robust, or complex Chernoff variants, etc.)
