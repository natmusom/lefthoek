/** @jsx jsx */
import { FunctionComponent, useState } from "react";
import { jsx, Heading, Box } from "theme-ui";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "../../components";
import { FeatureSelector } from "./FeatureSelector";
import { FeatureDetail } from "./FeatureDetail";
import { outerWrapper, featuresWrapper, headerWrapper } from "./styles";
import { texts } from "./sampleCopy";

// @ts-ignore
import filter from "./filter.png";
// @ts-ignore
import enhance from "./enhance.png";
// @ts-ignore
import contextualize from "./contextualize.png";
const images = { filter, enhance, contextualize };

const variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const FeaturesSection: FunctionComponent = () => {
  const [selectedText, selectText] = useState("filter");
  const onSelect = ({ title }) => selectText(title);
  return (
    <Section sx={outerWrapper}>
      <Box sx={headerWrapper}>
        <Heading variant="display">An Amazing Slogan</Heading>
        <Heading as="h3" variant="abstract">
          Something Even Better
        </Heading>
      </Box>
      <Box sx={featuresWrapper}>
        {Object.entries(texts).map(([title, text]) => (
          <FeatureSelector
            onSelect={onSelect}
            isSelected={title === selectedText}
            title={title}
          >
            <FeatureDetail
              image={images[title]}
              sx={{ display: ["block", "none"] }}
              text={text}
            />
          </FeatureSelector>
        ))}
      </Box>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={selectedText}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <FeatureDetail
            image={images[selectedText]}
            text={texts[selectedText]}
          />
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

export { FeaturesSection };
